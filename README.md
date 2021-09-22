This repository is based on an excellent tutorial:  

Build Youtube in React 01: Project Kickoff  
https://productioncoder.com/build-youtube-in-react-part-1/  
https://github.com/productioncoder/youtube-react  


## NOTE  
- After a search component in top menu with "Input" tag, React show a warning on findDomNode. But I cannot do anything because it's about Semantic-UI and the team is fixing it now. https://react.semantic-ui.com/addons/ref/  BTW, one of the reasons is that I specify <React.StrictMode> in index.js to start App. The warning is gone when the strict-node tag is deleted.  
- When you run "npm audit fix", it shows WARNING SKIPPING OPTIONAL DEPENDENCIES, you can safely ignore it. https://stackoverflow.com/questions/56103865/how-to-fix-unsupported-platform-for-fsevents1-2-9-wanted-osdarwin-arch/58775654#58775654, https://react.semantic-ui.com/addons/ref/   
- On snapshot test with "npm test", you will see "TestingLibraryElementError: Unable to find an element with the text: /learn react/i" from　src/App.test.js. Delete src/App.test.js. This file is unnecessary.  
- As in Part 11, the tutorial uses iframe to play YouTube video. If we create our own video sharing site, we will have to study a video player and how the player interacts with remote server.  
- Also in Part 11, an embedded YouTube player now cannot autoplay unless it's muted. If I try to send key "m" to unmute the video programmatically, it is blocked because of non cross-origin accress to the embedded YouTube in iframe. See "VideoTryingCrossOrigin.js". At the moment, I will live with the embedded YouTube without autoplay.  
- In Part 18, App.unit.test.js fails: "Could not find "store" in the context of "Connect(App)". Either wrap the root component in a \<Provider\>, or pass a custom React context provider to \<Provider\> and the corresponding React context consumer to Connect(App) in connect options." This is because we need to sandwich \<App\/\> with Provider as in src/index.js. Have to modify the test accordingly.  
- In part 20, it is dangerous to hardcode youtube API key. So I store it in .env on the project root folder and extract the API key from .env.  
 
## Used library / software 
- React developed and maintained by Facebook, but a big community behind that, MIT license  
- For taking snapshot for snapshot test, Enzyme developed and maintained by AirBnB, MIT license
  - Because enzyme adapter for React 17 is not officially released https://github.com/enzymejs/enzyme/issues/2429, I use the unofficial but good ver https://github.com/wojtekmaj/enzyme-adapter-react-17. You have to use "import Adapter from '@wojtekmaj/enzyme-adapter-react-17'"
- For testing, Jest developed and maintained by Facebook, MIT license  
- Redux from Part 18 (and Reselect in part 21), to hold state variables. It was originally developed by Facebook developers and now is maintained by a community. Open source and MIT license.  
- javascript-time-ago from part 27, to developed and maintained by individual and MIT license https://github.com/catamphetamine/javascript-time-ago and https://gitlab.com/catamphetamine. Interesting to see that GirHub suddenly banned the Russian developer's account https://medium.com/@catamphetamine/how-github-blocked-me-and-all-my-libraries-c32c61f061d3.  
- In part 31, react-waypoint for infinite scroll is developed and maintainded by individual https://github.com/civiccc/react-waypoint. The license is MIT.  
- In part 34, react-linkify is developed and maintained by individuals. MIT license. https://github.com/tasti/react-linkify  
