export const getResetPasswordTemplate = (host: string, resetCode: string) => {
  return `
  <!DOCTYPE html>
  <html>
  <head>
      <style>
          body { font-family: 'Arial', sans-serif; }
          .button {
              display: inline-block;
              padding: 10px 20px;
              font-size: 16px;
              cursor: pointer;
              text-align: center;
              text-decoration: none;
              outline: none;
              color: #fff;
              background-color: #007bff; /* Bootstrap primary color /
              border: none;
              border-radius: 5px;
              box-shadow: 0 2px #0056b3; / Darker shade of the button color */
          }
          .button:hover {background-color: #0069d9}
      
          .button:active {
              background-color: #005cbf;
              box-shadow: 0 2px #004085; /* Even darker shade for the pressed effect */
              transform: translateY(2px);
          }
      </style>
      </head>
      
  <body>
      <p>Përshëndetje,</p>
      <p>Ju së fundmi bëtë një kërkesë për të ndryshuar fjalekalimin e llogarise tuaj. Klikoni butonin e meposhtëm për ta ndryshuar:</p>
      <a href="${host}/#/reset-password?code=/${resetCode}" class="button">Ndrysho fjalëkalimin</a>
      <p>Nëse nuk keni bërë një kërkesë për të ndryshuar fjalëkalimin e llogarise tuaj, ju lutem injorojeni këtë email ose kontaktoni suportin tonë për më shumë informacion.</p>
      <p>Linku per te ndryshuar fjalekalimin do te skadoje pas 24 oresh.</p>
      <p>Agjencia Kombëtare e Punësimit dhe Aftësive</p>
  </body>
  </html>
  `;
};
