export const getSignUpTemplate = (
  host: string,
  code: string,
  userId: string,
) => {
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
              background-color: #4CAF50;
              border: none;
              border-radius: 15px;
              box-shadow: 0 9px #999;
          }
          .button:hover {background-color: #3e8e41}
  
          .button:active {
              background-color: #3e8e41;
              box-shadow: 0 5px #666;
              transform: translateY(4px);
          }
      </style>
      </head>
  <body>
      <p>Hello,</p>
      <p>Ju faleminderit për regjistrimin. Ju lutem klikoni butonin e mëposhtëm për të konfirmuar adresen tuaj të emailit dhe për të përfunduar regjistrimin.</p>
      <a href="${host}/#/access/confirm-user?id=${userId}&code=${code}" class="button">Konfirmo llogarinë</a>
      <p> Nëse nuk keni krijuar një llogari, asnjë veprim pasues nuk është i nevojshëm.</p>
      <p>Agjencia Kombëtare e Punësimit dhe Aftësive</p>
  </body>
  </html>
  `;
};
