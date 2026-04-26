// Vercel Serverless Function - Submit lead to PopLinks
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { first_name, email } = req.body;

    // Validate required fields
    if (!first_name || !email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Submit to PopLinks
    const response = await fetch('https://api.poplinks.io/api/ai/leads', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.POPLINKS_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first_name,
        email,
        tag: 'DISCERNMENT_FILTER_LEAD',
        lead_page_id: 15374
      })
    });

    const result = await response.json();

    // Return success
    res.status(200).json({ 
      success: true, 
      message: 'Lead captured successfully',
      redirect: 'https://discernment-filter-landing-lasharync4-1108s-projects.vercel.app/thanks.html'
    });

  } catch (error) {
    console.error('Error submitting lead:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to submit lead' 
    });
  }
}
