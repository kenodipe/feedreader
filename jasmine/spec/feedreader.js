/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    
    /**
     * test suite for the RSS Feed
     */
    describe('RSS Feeds', function() {
        /* tests to make sure that the allFeeds variable 
         * has been defined and that it is not empty
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /**
         * test to sure the feed objects havd defined URLs
         */
        it('should have all urls defined', function(){
            allFeeds.forEach((feed) => {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });


        /**
         * test to ensure the feed objects have defined names
         */
        it('should have all names defined', function(){
            allFeeds.forEach((feed) => {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    /**
     * Menu test suite
     */
    describe('Menu', function() {
       
       /**
        * test to ensure the menu object is hidden by default
        */
       const body = document.getElementsByTagName('body')[0];
       it('should have menu hidden', function() {
            expect(body.classList.contains('menu-hidden')).toBe(true);
       });
       
       /**
        * test to ensure the menu changes visibility when the menu icon is clicked
        */
       it('ensure menu visibility', function() {
            const menuIcon = document.querySelector('.menu-icon-link');
            menuIcon.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
       });
    });
        
   

    // Initial Entries test suite
    describe('Initial Entries', function() {
    
       // load the feed entries before each test
       beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
            
       });
       /**
        * test to ensure the feed returns at least an entry
        */
       it('load feed has at least one entry for container', function(done) {
           
           const feedContainer = document.querySelector('.feed');
           expect(feedContainer.children.length).toBeGreaterThan(0);
           done();
       });
    });
    

    // New Feed Selection test suite
    describe('New Feed Selection', function() {
      
       beforeEach(function(done) {
            loadFeed(1, function() {
                done();
            });
            
        });
        
        // test to ensure that each feed loads different content
        it('load different content', function(done) {

            const entry = document.querySelector('.entry-link');
            expect(entry.getAttribute('href').includes('css-tricks')).toBe(true);
            done();
        });
    });

    
}());
