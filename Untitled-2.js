<Provider store={store}>
      <NavigationContainer
        theme={DarkTheme}
      >
        <Stack.Navigator 
          initialRouteName="Home"
          mode="modal"
          screenOptions={{
            headerStyle: {
              backgroundColor: 'black',
              height: 80
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 20,
              textTransform: 'uppercase',
              textAlign: 'center',
            },
            headerTitleAlign: 'center',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
          /> 
          <Stack.Screen 
            name="luces" 
            component={LightScreen} 
          />
          <Stack.Screen 
            name="conducción" 
            component={DrivingScreen} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>