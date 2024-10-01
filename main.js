// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDYhopWfnMMY3QrY9AfbAeSARdR3UwHl6A",
    authDomain: "archive-706a4.firebaseapp.com",
    projectId: "archive-706a4",
    storageBucket: "archive-706a4.appspot.com",
    messagingSenderId: "170622219104",
    appId: "1:170622219104:web:0b19f27410c14735932405",
    measurementId: "G-P0BHDY5SLQ"
  };  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const analytics = firebase.analytics(app);
  const db = firebase.firestore();
  const auth = firebase.auth();


  
  // Fetch and render websites
  const fetchWebsites = async () => {
    const websitesCol = db.collection('websitesUrl');
    const websiteSnapshot = await websitesCol.get();
    const websiteList = websiteSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  
    // Render the website data
    const websiteListDiv = document.querySelector('.websiteList');
    websiteList.forEach(site => {
      const siteDiv = document.createElement('div');
      siteDiv.classList.add('websiteArchive');
      siteDiv.innerHTML = `
        <h2><a href="${site.url}" target="_blank">${site.title}</a></h2>
        <h2>${site.date}</h2>
        <p>${site.description}</p>
        `;
      websiteListDiv.appendChild(siteDiv);
    });
  };


  fetchWebsites();

//   firebase.auth().signOut().then(() => {
//     console.log("User signed out");
//   }).catch((error) => {
//     console.error("Error signing out:", error);
//   });
  
// firebase.auth().signInWithEmailAndPassword("")
//   .then((userCredential) => {
//     console.log('Admin signed in:', userCredential.user);
//     // Now, you can try to write data again
//     testWrite();
//   })
//   .catch((error) => {
//     console.error('Error signing in:', error);
//   });

//   const testWrite = async () => {
//     try {
//       await db.collection("websitesUrl").add({
//         title: "Unauthorized Website",
//         description: "This should fail",
//         url: "http://unauthorized.com"
//       });
//       console.log("Data successfully written (which should not happen)!");
//     } catch (error) {
//       console.error("Error writing document (expected result): ", error);
//     }
//   };
  
//   testWrite();
 
 