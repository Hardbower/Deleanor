<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="description" content="Deleanor Icecream Co.">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="layout.css" />
    <script src="jq.js"></script>
    <script src="script.js"></script>
    <title>Deleanor</title>
  </head>
  <body class='modal-on'>
    
    <section id='modal-loader' class="modal-window">
      <svg id='icecream-cone' version="1.1" 
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
	        viewBox="0 -200 118.7 612"
            xml:space="preserve"
        >
          <path id="cone" class="load-icon" 
                  d="M59.4,195.3c-2.9,0-5.5-1.5-6.9-4C47.1,182,0,99.5,0,65.3c0-4.4,3.6-8,8-8s8,3.6,8,8
	c0,21.9,26.9,75.7,43.4,105.6c16.4-30,43.4-83.8,43.4-105.6c0-4.4,3.6-8,8-8s8,3.6,8,8c0,34.2-47.1,116.7-52.4,126
	C64.8,193.8,62.2,195.3,59.4,195.3z"
          />
          <path id="cream" class="load-icon" d="M59.4,118.7C26.6,118.7,0,92.1,0,59.4S26.6,0,59.4,0c9.5,0,18.5,2.2,26.9,6.4
	c3.9,2,5.5,6.8,3.5,10.8c-2,3.9-6.8,5.5-10.8,3.5C72.9,17.6,66.3,16,59.4,16C35.4,16,16,35.4,16,59.4s19.4,43.4,43.4,43.4
	s43.4-19.4,43.4-43.4c0-8.2-2.3-16.1-6.6-23c-2.3-3.7-1.2-8.7,2.5-11c3.7-2.3,8.7-1.2,11,2.5c5.9,9.4,9,20.3,9,31.5
	C118.7,92.1,92.1,118.7,59.4,118.7z"
          />
      </svg>
    </section>
    
    <div id="view" class="container-fluid">
      <div class="row">
        <main class="col-md-9 col-md-push-3">
          <div class="row">
            <div class="modal-holder">
              <section id='modal-contact' class="modal-window">
                <div id='contact-exit' class="exit-holder" role='button'>
                  <svg class='exit-button'
                       version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                       viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve">
                    <path d="M13.7,10l5.5-5.5c1-1,1-2.7,0-3.7c-1-1-2.7-1-3.7,0L10,6.3L4.5,0.8c-1-1-2.7-1-3.7,0c-1,1-1,2.7,0,3.7L6.3,10l-5.5,5.5
	c-1,1-1,2.7,0,3.7C1.3,19.7,1.9,20,2.6,20s1.3-0.3,1.9-0.8l5.5-5.5l5.5,5.5c0.5,0.5,1.2,0.8,1.9,0.8c0.7,0,1.3-0.3,1.9-0.8
	c1-1,1-2.7,0-3.7L13.7,10z"/>
                  </svg>
                </div>
              </section>
            </div>
          </div>
        </main>
        <aside class="col-md-3 col-md-pull-9">
          <div class="row">
            <section id='logo-holder' class="col-md-12 hidden-sm hidden-xs">
              
            </section>
            <section id="map-holder" class="col-md-12">
               
            </section>
            <section id="contact-holder" class="col-md-12" role="button">
              <div role="button" id="contact-button">
                
              </div>
            </section>
          </div>
        </aside>
      </div>
    </div>
  </body>
</html>