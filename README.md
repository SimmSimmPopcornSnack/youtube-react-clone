## NOTE  
- When you run "npm audit fix", it shows WARNING SKIPPING OPTIONAL DEPENDENCIES, you can safely ignore it. https://stackoverflow.com/questions/56103865/how-to-fix-unsupported-platform-for-fsevents1-2-9-wanted-osdarwin-arch/58775654#58775654, https://react.semantic-ui.com/addons/ref/   
- On snapshot test with "npm test", you will see "TestingLibraryElementError: Unable to find an element with the text: /learn react/i" from　src/App.test.js. Delete src/App.test.js. This file is unnecessary.  

## Used library / software 
- React developed and maintained by Facebook, but a big community behind that, MIT license  
- For taking snapshot for snapshot test, Enzyme developed and maintained by AirBnB, MIT license
- For testing, Jest developed and maintained by Facebook, MIT license
  - Because enzyme adapter for React 17 is not officially released https://github.com/enzymejs/enzyme/issues/2429, I use the unofficial but good ver https://github.com/wojtekmaj/enzyme-adapter-react-17. You have to use "import Adapter from '@wojtekmaj/enzyme-adapter-react-17'"
