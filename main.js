// Config function to place in condif.js file to set global variable on Window object. 
// Use this if you want to configure global settings and avoid a rebuild process if you use a framework like Angular/React/Vue or something familiar.
// Just change add it to your project as asset and you dont need to rebuild your application and change the values here.

//See here[https://www.linkedin.com/pulse/how-configure-your-angular-app-without-rebuilding-source-akhil-k?trk=read_related_article-card_title] for more information

(function (window) {
  window.__env = window.__env || {};
  // Set global config variables
  window.__env.maintenance = true;
  // Setting this to false will disable console output
  window.__env.enableGreet = true;
})(this);

// ######################################################################################################################################################

// Create a random string for e.g. OAuth2 workflow

  returnHash() {
    const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890-._~'.split('');
    let token = '';
    for (let i = 0; i < 45; i++) {
      token += abc[Math.floor(Math.random() * abc.length)];
    }
    return token; //Will return a 45 bit "hash"
  }

// ######################################################################################################################################################

// base64Urlencode 

  base64UrlEncode(str): string {
    const base64 = btoa(str);
    return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
  }

// ######################################################################################################################################################

// Get and Set Cookies

  setCookie(cname, cvalue, ttl = 60 * 60 * 1000, reset: boolean = false) {
    const d = new Date();
    d.setTime(d.getTime() + ttl);
    let expires;
    if (!reset) {
      expires = 'expires=' + d.toUTCString();
      document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
    } else {
      document.cookie = `${cname}=; Max-Age=0; path=/; SameSite=Strict; Secure`;
    }
  }

  getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return '';
  }

// ######################################################################################################################################################

// Dropdown default italic

  checkDefaultOption() {
    const selectElements = document.querySelectorAll('.dropdown')! as NodeListOf<HTMLSelectElement>;
    selectElements.forEach(selectElement => {
        if (selectElement.value == 'default') {
        selectElement.classList.add('italic');
      } else {
        selectElement.classList.remove('italic');
      }
    })

  }

// Markup 
/*
  <style>
    .italic {
      font-style: italic;
    }
    
    .not-italic {
      font-style: normal;
    }
  </style>

    <select class="dropdown">
      <option selected hidden disabled value="default">Bitte wählen Sie</option>
      <option class="not-italic" value="Ich möchte Prepaid-Tarife von klarmobil.de vermarkten">Ich möchte Prepaid-Tarife von klarmobil.de vermarkten</option>
      <option class="not-italic" value="Ich möchte Prepaid-Tarife von klarmobil.de vermarkten">Ich möchte Prepaid-Tarife von klarmobil.de vermarkten</option>
      <option class="not-italic" value="Ich möchte Prepaid-Tarife von klarmobil.de vermarkten">Ich möchte Prepaid-Tarife von klarmobil.de vermarkten</option>
    </select>


*/

// ######################################################################################################################################################
