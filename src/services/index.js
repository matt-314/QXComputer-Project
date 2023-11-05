import { initializeApp } from 'firebase/app';

// // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC7FSB-1zfqDuXeENbhMHyXKKM0Izd9Bow',
  authDomain: 'qx-computers.firebaseapp.com',
  projectId: 'qx-computers',
  storageBucket: 'qx-computers.appspot.com',
  messagingSenderId: '103793085526',
  appId: '1:103793085526:web:a302395fa98d88ff30fff7',
};

initializeApp(firebaseConfig);

export * from './products';
