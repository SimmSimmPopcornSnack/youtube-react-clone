## NOTE  
- After a search component in top menu with "Input" tag, React show a warning on findDomNode. But I cannot do anything because it's about Semantic-UI and the team is fixing it now. https://react.semantic-ui.com/addons/ref/  BTW, one of the reasons is that I specify <React.StrictMode> in index.js to start App. The warning is gone when the strict-node tag is deleted.  
- When you run "npm audit fix", it shows WARNING SKIPPING OPTIONAL DEPENDENCIES, you can safely ignore it. https://stackoverflow.com/questions/56103865/how-to-fix-unsupported-platform-for-fsevents1-2-9-wanted-osdarwin-arch/58775654#58775654, https://react.semantic-ui.com/addons/ref/   
- On snapshot test with "npm test", you will see "TestingLibraryElementError: Unable to find an element with the text: /learn react/i" from　src/App.test.js. Delete src/App.test.js. This file is unnecessary.  
- As in Part 11, the tutorial uses iframe to play YouTube video. If we create our own video sharing site, we will have to study a video player and how the player interacts with remote server.  
- Also in Part 11, an embedded YouTube player now cannot autoplay unless it's muted. If I try to send key "m" to unmute the video programmatically, it is blocked because of non cross-origin accress to the embedded YouTube in iframe. See "VideoTryingCrossOrigin.js". At the moment, I will live with the embedded YouTube without autoplay.
 
## Used library / software 
- React developed and maintained by Facebook, but a big community behind that, MIT license  
- For taking snapshot for snapshot test, Enzyme developed and maintained by AirBnB, MIT license
  - Because enzyme adapter for React 17 is not officially released https://github.com/enzymejs/enzyme/issues/2429, I use the unofficial but good ver https://github.com/wojtekmaj/enzyme-adapter-react-17. You have to use "import Adapter from '@wojtekmaj/enzyme-adapter-react-17'"
- For testing, Jest developed and maintained by Facebook, MIT license  
- Redux from Part 18, to hold state variables. It was originally developed by Facebook developers and now is maintained by a community. Open source and MIT license.  
