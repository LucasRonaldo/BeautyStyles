import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome, { } from '../Welcome/Welcome';
import SignIn, { } from '../SignIn/SignIn';
import cadastroAdm from "../Cadastro/cadastroAdm";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="cadastroAdm"
                component={cadastroAdm}
                options={{ headerShown: false }}
            />



        </Stack.Navigator>
    )
}

