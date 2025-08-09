# 🎮 Discord Webhook Setup Guide

## 🎯 **Why Discord Webhooks?**

### **✅ Advantages:**
- **Free** - No account creation needed
- **Instant** - Messages appear immediately
- **Reliable** - No email delivery issues
- **Simple** - Easy to set up and maintain
- **Mobile** - Get notifications on your phone
- **Organized** - Keep all inquiries in one place

### **📱 Perfect for Photography Business:**
- **Instant notifications** when someone contacts you
- **Easy to respond** from your phone
- **No spam folder** issues
- **Professional appearance** with rich formatting

---

## 🛠️ **Step-by-Step Setup**

### **Step 1: Create Discord Server**
1. **Open Discord** (desktop or web)
2. **Create a new server** for your business
3. **Name it** "Lion Kidz Photography"
4. **Add yourself** as the owner

### **Step 2: Create Webhook**
1. **Go to your server**
2. **Right-click on a channel** (e.g., #inquiries)
3. **Select "Edit Channel"**
4. **Click "Integrations" tab**
5. **Click "Create Webhook"**
6. **Name it** "Contact Form"
7. **Copy the Webhook URL** (looks like: `https://discord.com/api/webhooks/123456789/abcdef...`)

### **Step 3: Test the Webhook**
1. **Click "Test Webhook"** in Discord
2. **Verify message appears** in your channel
3. **Note the webhook URL** for the next step

---

## 🔧 **Code Implementation**

### **Step 1: Remove EmailJS Dependencies**
```bash
npm uninstall @emailjs/browser
```

### **Step 2: Create Discord Webhook Function**
Create `src/lib/discord-webhook.ts`:

```typescript
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  message: string;
}

export const sendToDiscord = async (formData: ContactFormData) => {
  const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL;
  
  if (!webhookUrl) {
    throw new Error('Discord webhook URL not configured');
  }

  const embed = {
    title: '📸 New Photography Inquiry',
    color: 0xFF69B4, // Pink color
    fields: [
      {
        name: '👤 Name',
        value: formData.name,
        inline: true
      },
      {
        name: '📧 Email',
        value: formData.email,
        inline: true
      },
      {
        name: '📱 Phone',
        value: formData.phone || 'Not provided',
        inline: true
      },
      {
        name: '🎯 Service',
        value: formData.service,
        inline: true
      },
      {
        name: '📅 Preferred Date',
        value: formData.date || 'Not specified',
        inline: true
      },
      {
        name: '💬 Message',
        value: formData.message || 'No additional message',
        inline: false
      }
    ],
    timestamp: new Date().toISOString(),
    footer: {
      text: 'Lion Kidz Photography Website'
    }
  };

  const payload = {
    embeds: [embed]
  };

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`Discord webhook failed: ${response.status}`);
  }

  return response.json();
};
```

### **Step 3: Update Contact Form**
Replace EmailJS with Discord webhook in `src/pages/Contact.tsx`:

```typescript
import { sendToDiscord } from '../lib/discord-webhook';

// In handleSubmit function, replace EmailJS code with:
try {
  await sendToDiscord(formData);
  
  // Success toast
  toast({
    title: t('contactPage.form.success.title'),
    description: t('contactPage.form.success.description'),
  });

  // Reset form
  setFormData({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

} catch (error) {
  toast({
    title: t('contactPage.form.error.title'),
    description: t('contactPage.form.error.sendFailed'),
    variant: 'destructive',
  });
}
```

### **Step 4: Environment Variable**
Create `.env` file:
```env
VITE_DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/YOUR_WEBHOOK_URL
```

---

## 🎨 **Discord Message Format**

### **What You'll See in Discord:**
```
📸 New Photography Inquiry

👤 Name: John Doe
📧 Email: john@example.com
📱 Phone: +230 12345678
🎯 Service: Family Photography
📅 Preferred Date: 2024-12-25
💬 Message: Hi, I'm interested in booking a family photography session...

Sent at: 2024-12-19T10:30:00.000Z
Lion Kidz Photography Website
```

### **Features:**
- ✅ **Rich formatting** with colors and icons
- ✅ **Organized fields** for easy reading
- ✅ **Timestamp** for tracking
- ✅ **Professional appearance**
- ✅ **Mobile-friendly** notifications

---

## 🧪 **Testing the Integration**

### **Test 1: Basic Functionality**
1. **Fill out contact form**
2. **Submit form**
3. **Check Discord channel** for message
4. **Verify all fields** are present

### **Test 2: Error Handling**
1. **Disconnect internet**
2. **Submit form**
3. **Check for error message**
4. **Reconnect and test again**

### **Test 3: Mobile Testing**
1. **Open Discord app** on phone
2. **Submit form from website**
3. **Check for instant notification**
4. **Verify message formatting**

---

## 🔒 **Security Considerations**

### **✅ Secure Practices:**
- **Webhook URL is safe** to expose in client code
- **No sensitive data** in webhook URL
- **Discord handles** all security
- **Rate limiting** built into Discord

### **⚠️ Recommendations:**
- **Use environment variables** for webhook URL
- **Monitor webhook usage** in Discord
- **Set up notifications** on your phone
- **Regularly check** Discord channel

---

## 📱 **Mobile Setup**

### **Discord Mobile App:**
1. **Download Discord** on your phone
2. **Log in** to your server
3. **Enable notifications** for the channel
4. **Test notifications** by submitting form

### **Notification Settings:**
1. **Go to server settings**
2. **Click "Notifications"**
3. **Enable "All Messages"** for the channel
4. **Test with form submission**

---

## 🎯 **Benefits for Photography Business**

### **Instant Communication:**
- **Real-time notifications** when someone contacts you
- **Quick response** from your phone
- **No missed inquiries** due to email issues

### **Professional Appearance:**
- **Rich formatting** with colors and icons
- **Organized information** for easy reading
- **Timestamp tracking** for follow-up

### **Easy Management:**
- **All inquiries** in one Discord channel
- **Easy to search** through past messages
- **Simple to respond** directly in Discord

---

## 🚀 **Quick Setup Checklist**

### **Discord Setup:**
- [ ] Create Discord server
- [ ] Create webhook
- [ ] Copy webhook URL
- [ ] Test webhook

### **Code Setup:**
- [ ] Remove EmailJS dependencies
- [ ] Create discord-webhook.ts file
- [ ] Update Contact.tsx
- [ ] Add environment variable
- [ ] Test form submission

### **Mobile Setup:**
- [ ] Install Discord app
- [ ] Enable notifications
- [ ] Test mobile notifications

---

**🎮 STATUS: Ready to implement Discord webhook integration. Much simpler and more reliable than email!** 