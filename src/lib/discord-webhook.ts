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
    color: 0xFF69B4, // Pink color matching brand
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

  // Discord returns 204 (No Content) for successful webhook deliveries
  if (!response.ok && response.status !== 204) {
    throw new Error(`Discord webhook failed: ${response.status}`);
  }

  // For 204 responses, return success object instead of trying to parse JSON
  if (response.status === 204) {
    return { success: true };
  }

  return response.json();
}; 