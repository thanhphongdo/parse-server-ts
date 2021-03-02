// Define Cloud Functions
import('./functions/post').then(c => new c.PostFunction());

// Define Triggers
import('./triggers/post').then(c => new c.PostTrigger());

// Define Jobs
import('./jobs/post').then(c => new c.PostJob());

// Define Live Queries