import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
  container: { flex: 1, padding: 13 },
  hr: {
    marginTop: 20,
    marginBottom: 20,
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  text: { color: "black", fontSize: 20 },
  boldText: {
    fontSize: 24,
    backgroundColor: "rgba(0,0,0, 0.1)",
    marginTop: 10,
    color: "rgba(0,0,0, 0.6)"
  },
  buttonPressed: { backgroundColor: "aquamarine" },
  buttonNotPressed: { backgroundColor: "blue" },
  button: { borderRadius: 4, padding: 15, marginTop: 10 },
  buttonText: { color: "white", textAlign: "center", fontSize: 16 }
})

export const globalOptions = {
  name: "innovation-network--38287",
  url: "https://innovation-network--38287.botics.co",
  api: "https://innovation-network--38287.botics.co/api/v1"
}

export const modulesOptions = {
  "@modules/app-menu": {
    title: "BitDefender",
    copy: "Routes available!",
    styles: styles
  },

  "@modules/login": {
    LOGO_URL:
      "https://crowdbotics-slack-dev.s3.amazonaws.com/media/project_component_resources/cb-icon.png",
    BACKGROUND_URL:
      "https://crowdbotics-slack-dev.s3.amazonaws.com/media/project_component_resources/halfbg.png",
    HOME_SCREEN_NAME: "Home Screen",
    validateEmail: "^[^\\s]+([.-]?\\w+)*@\\w+([.-]?\\w+)*(.\\w{2,3})+$",
    SignInNavText: "Sign In",
    SignUpNavText: "Sign Up",
    SignInButtonText: "Login",
    SignUpButtonText: "Sign Up"
  },

  undefined: {
    title: "App Menu",
    copy: "Routes available",
    styles: styles,
    localOptions: localOptions
  }
}
