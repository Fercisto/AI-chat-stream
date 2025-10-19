# AI Chat Stream

Aplicación web para interactuar con modelos de inteligencia artificial mediante streaming de texto en tiempo real. Utiliza OpenRouter para acceder a diversos modelos de IA.

## Descripción

Sistema de chat que permite realizar consultas a diferentes modelos de IA y recibir respuestas mediante streaming, mostrando el texto palabra por palabra en tiempo real.

## Tecnologías

- Vite
- OpenRouter SDK
- Vercel AI SDK
- JavaScript
- HTML5 & CSS3

## Modelos Soportados

- OpenAI GPT OSS 20B (por defecto)
- DeepSeek Chat V3.1
- Google Gemma 3N E2B
- NVIDIA Nemotron Nano 9B V2

## Instalación

1. Clonar el repositorio
```bash
git clone [https://github.com/tu-usuario/ai-chat-stream.git](https://github.com/Fercisto/AI-chat-stream)
cd ai-chat-stream
```

2. Instalar dependencias
```bash
npm install
```

3. Configurar variables de entorno

Crear archivo `.env` en la raíz:
```env
VITE_OPENROUTER=tu_api_key_aqui
```

4. Iniciar servidor de desarrollo
```bash
npm run dev
```

## Obtener API Key

1. Crear cuenta en [OpenRouter](https://openrouter.ai/)
2. Generar API Key en [dashboard](https://openrouter.ai/keys)
3. Agregar la key al archivo `.env`

## Configuración

### Cambiar modelo de IA

En `main.js`:
```javascript
const result = streamText({
  model: openrouter('openai/gpt-oss-20b:free'),
  prompt,
});
```

### Personalizar system prompt
```javascript
const result = streamText({
  model: openrouter('openai/gpt-oss-20b:free'),
  prompt,
  system: 'Eres un experto que contesta de forma concisa',
});
```

### Ajustar temperatura
```javascript
temperature: 0 // Valores entre 0 (preciso) y 1 (creativo)
```
