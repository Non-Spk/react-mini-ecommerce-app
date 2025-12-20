import { createRoot } from 'react-dom/client'
import '@/styles/global.css'
import App from '@/App.tsx'

const rootElement = document.getElementById('root')!
const reactRoot = createRoot(rootElement)

reactRoot.render(
    <App />
)