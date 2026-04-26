# 60-Second Discernment Filter™ - MintBird Integration Setup

## Overview
Landing page integrated with PopLinks/MintBird lead capture system.

---

## Live URLs

| Page | URL | Status |
|------|-----|--------|
| **Landing Page** | https://discernment-filter-landing-lasharync4-1108s-projects.vercel.app | ✅ LIVE |
| **Thank You Page** | https://discernment-filter-landing-lasharync4-1108s-projects.vercel.app/thanks.html | ✅ LIVE |
| **PopLinks Lead Page** | https://chadnicely.com/discernment-filter | ✅ LIVE |

---

## What's Configured

### Landing Page (Vercel)
- ✅ Form submits to PopLinks lead capture
- ✅ Fields: First Name, Email Address
- ✅ Hidden tag field: `DISCERNMENT_FILTER_LEAD`
- ✅ Redirects to custom thank you page after submission

### PopLinks Lead Page
- ✅ Lead Page ID: 15374
- ✅ Landing Page ID: 15344
- ✅ Slug: `discernment-filter`
- ✅ Domain: chadnicely.com
- ✅ URL: https://chadnicely.com/discernment-filter

---

## Manual Setup Required in MintBird/PopLinks

### Step 1: Configure Lead Page Redirect
1. Log into https://app.poplinks.io
2. Go to **Lead Pages**
3. Find: "60-Second Discernment Filter Lead Capture" (ID: 15374)
4. Edit the page
5. Set **Redirect After Submission** to:
   ```
   https://discernment-filter-landing-lasharync4-1108s-projects.vercel.app/thanks.html
   ```

### Step 2: Create Email Tag
1. Go to **Contacts > Tags**
2. Create new tag: `DISCERNMENT_FILTER_LEAD`
3. Note the Tag ID for automation

### Step 3: Set Up Email Automation
1. Go to **Automations > Email Sequences**
2. Create new sequence: "Discernment Filter Delivery"
3. Trigger: Tag Applied = `DISCERNMENT_FILTER_LEAD`
4. Add email:

**Subject:** Your 60-Second Discernment Filter™

**Body:**
```
Hi {{first_name}},

Here's your 60-Second Discernment Filter™:

[INSERT PDF LINK]

Use it before you say yes to anything that looks like an opportunity.

If it hits 3 red flags… it's not aligned.

Leaders don't chase opportunities.
They qualify them.

UCDI Leadership
```

### Step 4: Upload PDF
1. Go to **Media/Files**
2. Upload the 60-Second Discernment Filter PDF
3. Copy the file URL
4. Update the email template with the actual PDF link

### Step 5: Test the Flow
1. Submit test lead on landing page
2. Verify contact is created with tag
3. Verify email is received
4. Verify PDF link works

---

## Form Integration Details

The form on the Vercel landing page submits to PopLinks with these fields:

```html
<form action="https://chadnicely.com/discernment-filter" method="POST">
    <input type="text" name="first_name" required>
    <input type="email" name="email" required>
    <input type="hidden" name="tag" value="DISCERNMENT_FILTER_LEAD">
    <input type="hidden" name="redirect" value="https://discernment-filter-landing-lasharync4-1108s-projects.vercel.app/thanks.html">
</form>
```

**Note:** The PopLinks form handler will need to be configured to accept these fields and apply the tag.

---

## Alternative: Direct PopLinks Form Embed

If the redirect approach doesn't work, you can embed the PopLinks form directly:

1. In PopLinks, get the embed code for lead page ID 15374
2. Replace the form section in `index.html` with the embed code
3. Redeploy to Vercel

---

## GitHub Repository

**Repo:** https://github.com/EchoSystem357/discernment-filter-landing

To make updates:
```bash
git clone https://github.com/EchoSystem357/discernment-filter-landing.git
cd discernment-filter-landing
# Edit files
git add .
git commit -m "Your changes"
git push origin main
```

Vercel will auto-deploy on push.

---

## Files Structure

```
discernment-filter-landing/
├── index.html          # Landing page with form
├── thanks.html         # Thank you page
├── vercel.json         # Vercel config
└── deploy.tar.gz       # Deployment archive
```

---

## Next Steps Checklist

- [ ] Configure redirect URL in PopLinks lead page settings
- [ ] Create `DISCERNMENT_FILTER_LEAD` tag in MintBird
- [ ] Upload PDF to MintBird
- [ ] Create email automation with PDF link
- [ ] Test complete lead capture flow
- [ ] Verify email delivery
- [ ] (Optional) Add custom domain

---

## Support

**PopLinks/MintBird Dashboard:** https://app.poplinks.io
**Vercel Dashboard:** https://vercel.com/lasharync4-1108s-projects/discernment-filter-landing
**GitHub Repo:** https://github.com/EchoSystem357/discernment-filter-landing

---

**Created:** April 26, 2026
**Status:** Landing page live, manual setup required for email automation
