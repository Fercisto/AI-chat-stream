import './style.css'
import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { streamText } from 'ai';

const openrouter = createOpenRouter({
  apiKey: import.meta.env.VITE_OPENROUTER
});

const app = document.querySelector('#app');
const submitBtn = document.querySelector('#submit');
const form = document.querySelector('form');

form.addEventListener('submit', async e => {
  e.preventDefault();

  const prompt = document.querySelector('#prompt').value;

  if(prompt.trim() === '') {
    alert('La consulta no puede ir vacía');
    return;
  }

  submitBtn.disabled = true;

  const result = streamText({
    // model: openrouter('deepseek/deepseek-chat-v3.1:free'),
    model: openrouter('openai/gpt-oss-20b:free'),
    // model: openrouter('google/gemma-3n-e2b-it:free'),
    // model: openrouter('nvidia/nemotron-nano-9b-v2:free'),
    prompt,
    // system: 'Eres un niño de 3 años',
    // system: 'Eres un abuelo de 90 años'
    // system: 'Eres un genio que contesta al grano',
    temperature: 0
  });

  while(app.firstChild) {
    app.removeChild(app.firstChild);
  }

  for await(const text of result.textStream) {
    app.append(text);
  }

  submitBtn.disabled = false;

});