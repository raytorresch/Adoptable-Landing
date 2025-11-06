import fs from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
    'Firebase API Key: ',
    'Firebase Auth Domain: ',
    'Firebase Project ID: ',
    'Firebase Storage Bucket: ',
    'Firebase Messaging Sender ID: ',
    'Firebase App ID: ',
    'Firebase Measurement ID: '
];

async function setupEnv() {
  const answers = {};
  
  for (const question of questions) {
    const answer = await new Promise(resolve => {
      rl.question(question, resolve);
    });
    answers[question] = answer;
  }
  
    // Generar .env.local
    const envContent = `
    NEXT_PUBLIC_FIREBASE_API_KEY=${answers[questions[0]]}
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=${answers[questions[1]]}
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=${answers[questions[2]]}
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=${answers[questions[3]]}
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=${answers[questions[4]]}
    NEXT_PUBLIC_FIREBASE_APP_ID=${answers[questions[5]]}
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=${answers[questions[6]]}
    `.trim();
    
    fs.writeFileSync('.env.local', envContent);
    console.log('✅ .env.local creado exitosamente!');
    rl.close();
}

setupEnv();