// ITEM CONTROLLER ************************

const ItemCtrl = (function(){
    // item constructor
    const Item = function(id, url, shortUrl){
        this.id = id;
        this.url = url;
        this.shortUrl = shortUrl;
    };

    //data structure
    const data = {
        items: [
            // {id:0, url:'http://www.hello.com', shortUrl:'http://sho.link.j8t5'},
            // {id:1, url:'http://www.bye.com', shortUrl:'http://show.link/7hk9'}
        ],
        currentItem: null
    };

    // public methods
    return{
        logData: function(){
            return data;
        },
        addLink: function(link){
            let ID;
            // create id
            if(data.items.length > 0){
                ID = data.items[data.items.length - 1].id + 1;
            } else {
                ID = 0;
            }
            let shortLink;
            shortLink = ItemCtrl.generateLink();
            //create new item
            newItem = new Item(ID, link, shortLink);
            // push it into the array
            data.items.push(newItem);

            return newItem;
        },
        // generate short link
        generateLink: function(){
            const c1 = ItemCtrl.generateCharacter();
            const c2 = ItemCtrl.generateCharacter();
            const c3 = ItemCtrl.generateCharacter();
            const c4 = ItemCtrl.generateCharacter();

            return 'http://sho.link/'+c1+c2+c3+c4;
        },
        // generate single character
        generateCharacter: function(){
            const arr = 'abcdefghijklmnopqrstuvwxyz1234567890';
            return arr[Math.floor(Math.random()*arr.length)];
        },
        // get item by id
        getItemById: function(id){
            let found = null;
             // loop through item
             data.items.forEach(function(item){
                if(item.id ===  id){
                    found = item;
                    }
                })
                   return found;
        },
        // set current link
        setCurrentLink: function(link){
            data.currentItem = link;

            return data.currentItem.shortUrl;
        }

    }
})();

// UI CONTROLLER ************************
const UICtrl = (function(){
    // ui selectors
    const UISelectors = {
        linkInput: '#shortener',
        shortItBtn: '#submit__btn',
        linksContainer: '.links__container',
        errorMsg: '.error__msg',
        colyLink: '.copy__btn'
    }

    // public methods
    return{
        // make selectors public
        getSelectors: function(){
            return UISelectors;
        },
        // get input value
        getLinkInput: function (){
            return {
                longLink: document.querySelector(UISelectors.linkInput).value
            }
        },
        // check valid url
        errorLink: function(){
            const errorMsg = document.querySelector(UISelectors.errorMsg);
            errorMsg.className = 'error__msg show';

            setTimeout(function(){
                errorMsg.className = 'error__msg'
            }, 3000);

            UICtrl.clearInput()
        },
        // clear input
        clearInput: function(){
            document.querySelector(UISelectors.linkInput).value = '';
        },
        // add new link to UI
        addListLink: function(item){
            // create new div
            const div = document.createElement('div');
            // add class
            div.className = 'link';
            // add id
            div.id = `link-${item.id}`;
            // add html
            div.innerHTML = `
            <span class="long__link">${item.url}</span>
            <span class="short__link">${item.shortUrl}</span>
            <button class="copy__btn">Copy</button>
            `;
            //insert item
            document.querySelector(UISelectors.linksContainer).insertAdjacentElement('beforeend', div);
        },
        copyShortLink: function(link){
            const textarea = document.createElement('textarea');
            const copiedLink = link;

            textarea.value = copiedLink;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            textarea.remove();
        },
        changeButton: function(btn){
            btn.style.backgroundColor = '#21243d';
            btn.style.color = 'white';
            btn.innerHTML = 'Copied!';
        }
    }
})();

// ITEM CONTROLLER ************************
const App = (function(ItemCtrl, UICtrl){
    // event listeners
    const loadEventListeners = function (){
        // get ui selectors
        const UISelectors = UICtrl.getSelectors();
        // add new link
        document.querySelector(UISelectors.shortItBtn).addEventListener('click', addLink);
        // copy link
        document.querySelector(UISelectors.linksContainer).addEventListener('click', copyLink);
    }

    // add new link
    const addLink = function(e){
        // get form input from UI controller
        const input = UICtrl.getLinkInput();

        // make sure input has a value
        if(input.longLink !== ''){
            const re = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

            if(re.test(input.longLink) == false){
                // run error msg
                UICtrl.errorLink();
            } else if(re.test(input.longLink) ==  true){
                // add new item
                const newLink = ItemCtrl.addLink(input.longLink);
                // add item to ui list
                UICtrl.addListLink(newLink);
                // clear inputs
                UICtrl.clearInput();
            }
        }
        // console.log(input.longLink);

        e.preventDefault();
    };

    // copy link
    const copyLink = function(e){
        if(e.target.classList.contains('copy__btn')){
            // get list item ID
            const linkId = e.target.parentNode.id;
            // break the id into an array
            const linkArr = linkId.split('-');
            // get the actual id
            const id = parseInt(linkArr[1]);
            // get the link to be copied by using the id
            const linkToCopy = ItemCtrl.getItemById(id);
            // set current link
            const currentLink = ItemCtrl.setCurrentLink(linkToCopy);
            // copy short link
            UICtrl.copyShortLink(currentLink);
            // change color button
            UICtrl.changeButton(e.target);
            
        }
        
    }

    // init function
    return{
        init: function(){
            loadEventListeners();
        }
    }
})(ItemCtrl, UICtrl);

App.init();