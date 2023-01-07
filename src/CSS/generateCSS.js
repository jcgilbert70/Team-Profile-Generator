module.exports = () => {
    return `
    body {
        margin: 0px;
    }
    
    header {
        align-items: center;
        background-color: blue;
        color: white;
        display: flex;
        height: 5rem;
        justify-content: center;
    }
    
    main {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 5rem;
    }
    
    #employee-card {
        border: solid 1px grey;
        border-radius: 0.25rem;
        box-shadow: 5px 5px 5px black;
        margin: 3rem;
        min-width: 10rem;
        width: 10rem;
    }
    
    #card-header {
        padding: 1rem;
        background: grey;
        color: white;
    }
    
    #employee-name {
        margin: 0;
    }
    
    #employee-role {
        align-items: center;
        display: flex;
        margin: 0;
        flex-direction: row;
    }
    
    #image {
        margin: 0 1rem 0 0;
        max-height: 1rem;
    }
    
    #role {
        margin: 0;
    }
    
    #card-info {
        margin: 2rem 1rem;
    }
    
    #card-info p {
        margin: 0;
        border: solid 1px black;
        padding: 1rem;
    }
    `
}