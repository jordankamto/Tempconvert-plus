# 🌡️ TempConvert+ — Premium Celsius Converter

**TempConvert+** is a minimalist and elegant temperature conversion app built with React Native and TypeScript. Designed with user experience in mind, it allows real-time conversion from Celsius to Fahrenheit or Kelvin with a visually reactive interface that adapts the background according to the temperature level (cold, normal, hot).

> 🧪 First React Native project built for learning, focusing on clean architecture, component separation, and UX clarity.

---

## ✨ Features

- 🔁 **Real-time temperature conversion** as you type
- 🌡️ **Switch between Fahrenheit and Kelvin** with one tap
- 🖼️ **Dynamic background** that changes based on the input temperature:
  - ❄️ Cold background (below 20°C)
  - 🌤️ Normal background (20°C–30°C)
  - 🔥 Hot background (above 30°C)
- 🧼 **Minimalist, clean, and responsive UI**
- ⚠️ Input validation to ensure only numeric input is accepted

---

## 📱 Screenshots

| Cold                              | Normal                                | Hot                             |
| --------------------------------- | ------------------------------------- | ------------------------------- |
| ![cold](./assets/images/cold.png) | ![normal](./assets/images/normal.png) | ![hot](./assets/images/hot.png) |

> 🎥 You can also watch the [demo video](./assets/video/Screen_Recording_20250712_213923_Expo%20Go.mp4)

---

## ⚙️ Stack & Tools

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- Built-in **StyleSheet** API (with styles separated per component)

---

## 📂 Project Structure

/
├── app/
│ └── index.tsx # Main screen
├── components/
│ ├── TemperatureInput.tsx
│ ├── ResultDisplay.tsx
│ ├── SwitchUnitButton.tsx
│ └── \*.styles.ts # Styles for each component
├── services/
│ └── temperatureConversion.ts
├── assets/
│ ├── backgrounds/ # Cold / normal / hot background images
│ └── demo/ # Video and screenshots

## 🧠 Motivation

This project was created as my first React Native app to learn:

- Basics of Expo and mobile UI
- Component-based architecture
- TypeScript usage and input validation
- Visual feedback and UX refinement
