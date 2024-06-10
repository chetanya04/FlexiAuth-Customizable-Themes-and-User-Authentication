import { ChakraProvider } from '@chakra-ui/react'
import Toggle from './Toggle/ToggleTheme.jsx';
import AuthPage from './auth/page';

export default function Home() {
  return (
    <>
  <div>
  <ChakraProvider>
    <Toggle/>
    
  </ChakraProvider>
      <AuthPage/>
    </div>
  </>
  )
}
