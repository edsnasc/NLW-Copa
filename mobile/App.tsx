import { NativeBaseProvider, StatusBar } from "native-base";
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { AuthContextProvider } from "./src/context/AuthContext";


import { Loading } from './src/components/Loading';
import { SignIn } from './src/screens/SingIn';

import { THEME } from './src/styles/theme';
import { New } from "./src/screens/New";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <AuthContextProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <New /> : <Loading />}
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}
