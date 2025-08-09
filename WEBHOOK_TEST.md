# 🧪 Discord Webhook Test Guide

## 🎯 **Testing the Webhook Configuration**

### **Step 1: Check Environment Variable**
1. **Open browser console** (F12)
2. **Type this command**:
   ```javascript
   console.log(import.meta.env.VITE_DISCORD_WEBHOOK_URL)
   ```
3. **Expected result**: Should show your webhook URL (not undefined)

### **Step 2: Test Form Submission**
1. **Fill out the contact form** with test data:
   - Name: Test User
   - Email: test@example.com
   - Phone: +230 12345678
   - Service: Family Photography
   - Date: 2024-12-25
   - Message: This is a test message
2. **Submit the form**
3. **Check browser console** for debug messages:
   - "Webhook URL loaded: Yes"
   - "Sending to Discord webhook..."
   - "Discord response status: 204" (success)

### **Step 3: Check Discord Channel**
1. **Go to your Discord server**
2. **Check the #inquiries channel**
3. **Look for a message** like this:
   ```
   📸 New Photography Inquiry
   
   👤 Name: Test User
   📧 Email: test@example.com
   📱 Phone: +230 12345678
   🎯 Service: Family Photography
   📅 Preferred Date: 2024-12-25
   💬 Message: This is a test message
   
   Sent at: 2024-12-19T10:30:00.000Z
   Lion Kidz Photography Website
   ```

---

## 🚨 **Common Issues & Solutions**

### **Issue 1: "Webhook URL loaded: No"**
**Problem**: Environment variable not loaded
**Solutions**:
- Check `.env` file is in root directory
- Restart development server: `npm run dev`
- Check `.env` file format: `VITE_DISCORD_WEBHOOK_URL=https://...`

### **Issue 2: "Discord response status: 404"**
**Problem**: Invalid webhook URL
**Solutions**:
- Check webhook URL is correct
- Verify webhook still exists in Discord
- Recreate webhook if needed

### **Issue 3: "Discord response status: 429"**
**Problem**: Rate limit reached
**Solutions**:
- Wait a few minutes
- Check Discord server settings
- Verify webhook permissions

### **Issue 4: No message in Discord**
**Problem**: Webhook not working
**Solutions**:
- Check webhook URL is correct
- Verify Discord server permissions
- Test webhook manually in Discord

---

## 🔧 **Manual Webhook Test**

### **Test in Discord:**
1. **Go to your Discord server**
2. **Right-click on #inquiries channel**
3. **Select "Edit Channel"**
4. **Click "Integrations"**
5. **Find your webhook**
6. **Click "Test Webhook"**
7. **Check if test message appears**

### **Test with curl:**
```bash
curl -X POST -H "Content-Type: application/json" -d '{"content":"Test message"}' YOUR_WEBHOOK_URL
```

---

## 📊 **Expected Results**

### **✅ Success Indicators:**
- ✅ Environment variable loads correctly
- ✅ Form submits without errors
- ✅ Success message appears
- ✅ Message appears in Discord
- ✅ Form resets after submission

### **❌ Failure Indicators:**
- ❌ "Webhook URL not configured" error
- ❌ "Discord webhook failed" error
- ❌ No message in Discord channel
- ❌ Form doesn't reset after submission

---

## 🎯 **Next Steps**

### **If Webhook Works:**
1. ✅ **Remove debug console.log statements**
2. ✅ **Test with real form data**
3. ✅ **Set up mobile notifications**

### **If Webhook Doesn't Work:**
1. 🔧 **Check webhook URL format**
2. 🔧 **Verify Discord permissions**
3. 🔧 **Recreate webhook if needed**
4. 🔧 **Test manually in Discord**

---

**🧪 STATUS: Ready to test webhook functionality with debug logging enabled.** 