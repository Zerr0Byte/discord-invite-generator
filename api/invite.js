export default async function handler(req, res) {
  const response = await fetch(
    `https://discord.com/api/v10/channels/${process.env.CHANNEL_ID}/invites`,
    {
      method: "POST",
      headers: {
        Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        max_age: 3600,
        max_uses: 1,
      }),
    }
  );
  const data = await response.json();
  res.redirect(302, `https://discord.gg/${data.code}`);
}
