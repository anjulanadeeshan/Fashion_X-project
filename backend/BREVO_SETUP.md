# Brevo Email Integration Setup Guide

## Step 1: Create a Brevo Account

1. Go to [Brevo](https://www.brevo.com/) (formerly Sendinblue)
2. Click **Sign Up** (Free plan available - 300 emails/day)
3. Complete registration and verify your email

## Step 2: Get Your SMTP Credentials

1. **Login to Brevo Dashboard**
2. Click on your profile (top right) → **SMTP & API**
3. Navigate to **SMTP** tab
4. You'll see:
   - **SMTP Server:** `smtp-relay.brevo.com`
   - **Port:** 587
   - **Login:** Your Brevo login email
   - **Master Password:** Click "Create" or "View" to get your SMTP key

## Step 3: Configure Your .env File

Update your `.env` file with the credentials:

```env
# Brevo Email Configuration
BREVO_SMTP_USER=your_brevo_login_email@example.com
BREVO_SMTP_PASSWORD=xsmtpsib-your-actual-smtp-key-here
EMAIL_FROM_ADDRESS=noreply@yourdomain.com
EMAIL_FROM_NAME=Forever E-Commerce
FRONTEND_URL=http://localhost:5173
```

### Important Notes:

- **BREVO_SMTP_USER**: Use the email you registered with Brevo
- **BREVO_SMTP_PASSWORD**: Use the SMTP key (NOT your Brevo login password)
- **EMAIL_FROM_ADDRESS**: The "from" email (can be any email, but use verified domain in production)
- **EMAIL_FROM_NAME**: Display name in emails
- **FRONTEND_URL**: Your frontend URL (for reset links)

## Step 4: Verify Sender Email (For Production)

For production use, verify your sending domain:

1. Go to **Senders** in Brevo dashboard
2. Click **Add a sender**
3. Enter email address (e.g., noreply@yourdomain.com)
4. Verify via email confirmation

## Step 5: Test Email Sending

Restart your backend server:

```bash
cd backend
npm start
```

Test the password reset:
1. Go to frontend `/forgot-password`
2. Enter a registered email
3. Check your email inbox for reset instructions

## Step 6: Monitor Email Activity

- **Dashboard**: View sent emails and delivery rates
- **Logs**: Check for any delivery issues
- **Statistics**: Monitor open rates and clicks

## Brevo Free Plan Limits

- ✅ 300 emails per day
- ✅ Unlimited contacts
- ✅ SMTP relay
- ✅ Email templates
- ✅ Real-time statistics

For higher volume, upgrade to paid plans.

## Troubleshooting

### Issue: "Authentication failed"
**Solution:** 
- Verify SMTP password is correct (not login password)
- Regenerate SMTP key if needed

### Issue: Emails going to spam
**Solution:**
- Verify sender domain
- Add SPF and DKIM records to your domain
- Use a verified email address

### Issue: "Connection timeout"
**Solution:**
- Check firewall allows port 587
- Verify SMTP server: `smtp-relay.brevo.com`

## Alternative: Use Brevo API Instead of SMTP

If you prefer API over SMTP:

1. Install Brevo SDK:
```bash
npm install @getbrevo/brevo
```

2. Get API key from Brevo → API Keys
3. Use API instead of SMTP in emailService.js

## Production Checklist

- [ ] Verify sender domain
- [ ] Set up SPF/DKIM records
- [ ] Use environment variables (never commit .env)
- [ ] Remove resetToken from API response
- [ ] Monitor email delivery rates
- [ ] Set up email templates in Brevo
- [ ] Configure bounce handling
- [ ] Add unsubscribe links (for marketing emails)

## Support

- Brevo Documentation: https://developers.brevo.com/
- Support: https://help.brevo.com/

---

**Your email service is now configured! 🎉**
