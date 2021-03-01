// Define Cloud Functions
import('./functions/post').then(c => new c.PostCloud());

// Define Triggers
import('./triggers/post').then(c => new c.PostCloud());

// Define Jobs


// Define Live Queries