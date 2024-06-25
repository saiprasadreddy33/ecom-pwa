// service-worker.js

self.addEventListener('fetch', (event) => {
    if (event.request.url.startsWith('https://fakestoreapi.com/')) {
      event.respondWith(
        caches.open('api-cache').then(async (cache) => {
          try {
            const response = await fetch(event.request);
            cache.put(event.request, response.clone());
            return response;
          } catch (error) {
            const cachedResponse = await caches.match(event.request);
            if (cachedResponse) {
              return cachedResponse;
            } else {
              throw error;
            }
          }
        })
      );
    } else {
      event.respondWith(
        caches.match(event.request).then((response) => {
          return response || fetch(event.request);
        })
      );
    }
  });
  
  self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-cart-data') {
      event.waitUntil(syncCartData());
    }
  });
  
  /*async function syncCartData() {
    const unsyncedData = await getUnsyncedDataFromIndexedDB(); // Implement this function to retrieve unsynced data
    try {
      const response = await fetch('https://productsoffline.com/sync', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(unsyncedData),
      });
      if (response.ok) {
        // Mark items as synced in IndexedDB
        markSyncedInIndexedDB(unsyncedData);
      }
    } catch (error) {
      console.error('Error syncing data:', error);
    }
  }*/
  