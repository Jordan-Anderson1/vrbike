# How to run the project


1. clone repo

2. Install Node if not already installed and update to latest version

3. install dependencies by running
   
```bash
npm install
```

4. Run the devlopment environment

```bash
npx expo start
```

5. scan QR code and download Expo App to run on physical device **OR** key 'i' for ios simulator or 'a' for android simulator (open simulator first)

**No device?** 
key 'w' to run in the browser

# To contribute to poject 

1. Fork the repository

2. Clone the forked repository to your device

3. Create a new branch for the feature you are working on by running
```bash
git checkout -b 'your-branch-name'
```

**⛔️⚠️Please do not make changes directly to main!⚠️⛔️**
 
4. Commit **often**. Regular commits make debugging easier and merging code easier. Commits can be made through your IDE's GUI

   
 **OR**

To stage all changes: 
```bash
git add .
```

To commit changes:
```bash 
git commit -m "your commit message"
``` 
 
When ready to merge changes run
```bash'
git push origin your-branch-name
```
 
5. Create a pull request in the main repository and **request review**.
   
⚠️⛔️Do **not** merge unreviewed code⚠️⛔️.

# Project styling

This project uses tailwind for styling. Tailwind documentation can be found at : https://tailwindcss.com/docs/installation/using-vite

## Tailwind styles
```<Text classname="text-3xl font-bold"> Hello, World! </Text>```

## Inline styles

```<Text styles={fontSize: "20px", fontWeight: 'bold}> Hello, World! </Text>```

Where tailwind classes are unavailable such as non React Native components, inline styles should be used to maintain readability 


