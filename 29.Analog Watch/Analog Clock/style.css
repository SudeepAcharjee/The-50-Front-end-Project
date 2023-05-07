*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    color: #ffffff;
}

body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #212121;
}

.container{
    position: relative;
}

.clock{
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.25);
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
}

.clock span{
    position: absolute;
    transform: rotate(calc(30deg * var(--i))); 
    inset: 12px;
    text-align: center;
}

.clock span b{
    transform: rotate(calc(-30deg * var(--i)));
    display: inline-block;
    font-size: 20px;
}

.clock::before{
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #fff;
    z-index: 2;
}

.hand{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}
.hand i{
    position: absolute;
    background-color: var(--clr);
    width: 4px;
    height: var(--h);
    border-radius: 8px;
}