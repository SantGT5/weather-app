
# Weather App
## First view
<img width="500" alt="Screenshot 2023-05-07 at 23 24 14" src="https://user-images.githubusercontent.com/83282533/236703239-a3047fc5-ed17-4bd3-8ac5-0ac15a02edd0.png">

### Project
This is a simple weather application built using React v18 ([Vite](https://vitejs.dev/)) and Redux Toolkit to manage/persist state globally. It allows users to search for the weather of a specific location and add it to their favorites for quick access later.

*The app asks for the user location, if user denied to share his location, by default it shows the weather of Amsterdam.*

### Start project

> **_IMPORTANT:_**  
> Be sure the following port is available:   
> -- 5173   

To get started with the project, make sure you have Docker installed on your system.

```
$ git clone https://github.com/SantGT5/weather-app.git

$ cd weather-app

--- docker compose ---
$ npm run docker:dev
```
After run project, the following success message appears in the terminal:

<img width="420" alt="Screenshot 2023-05-07 at 21 18 39" src="https://user-images.githubusercontent.com/83282533/236698170-275e767c-d92d-4a4f-8483-ae1c39349bbf.png">

Then you can open the URL: http://localhost:5173/

### Redux Slices Testing

The project uses [Vitest](https://vitest.dev/). To run the tests, run the project and run the following command in a **other terminal**:

```
$ npm run docker:test
```
