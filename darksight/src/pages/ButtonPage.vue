<template>
    <section>
        <header class="hero">
        <div class="header-subtitle">UI Component Library</div>
        <h2 class="header-title">Button</h2>
        <p>
            Buttons trigger user actions and represent the primary, secondary, and contextual commands in an interface.
            Use clear labels, consistent hierarchy, and appropriate states to guide interaction.
        </p>
        </header>
        <div class="flex">
            <div class="flex-item">
                <button>Submit<svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960"
                        width="16px" fill="currentColor">
                        <path d="M630-444H192v-72h438L429-717l51-51 288 288-288 288-51-51 201-201Z" />
                    </svg></button>
            </div>
            <div class="flex-item">
                <button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                        fill="currentColor">
                        <path d="m330-444 201 201-51 51-288-288 288-288 51 51-201 201h438v72H330Z" />
                    </svg>Submit</button>
            </div>
            <div class="flex-item">
                <button class="btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                        width="24px" fill="currentColor">
                        <path d="m330-444 201 201-51 51-288-288 288-288 51 51-201 201h438v72H330Z" />
                    </svg>Submit</button>
            </div>
            <div class="flex-item">
                <button disabled>Submit</button>
            </div>
            <div class="flex-item">
                <button class="btn-small">Submit</button>
            </div>
            <div class="flex-item">
                <button class="btn-medium">Submit</button>
            </div>
            <div class=flex-item>
                <button class="btn-large">Submit</button>
            </div>
            <div class="flex-item">
                <button class="btn-outline">Submit</button>
            </div>
            <div class="flex-item">
                <button class="btn-soft">Submit</button>
            </div>
            <div class="flex-item">
                <button class="btn-icon-only"><svg xmlns="http://www.w3.org/2000/svg" height="24px"
                        viewBox="0 -960 960 960" width="24px" fill="currentColor">
                        <path d="m330-444 201 201-51 51-288-288 288-288 51 51-201 201h438v72H330Z" />
                    </svg></button>
            </div>
            <div class="flex-item">
                <button class="btn-outline"><svg class="divided" xmlns="http://www.w3.org/2000/svg" height="24px"
                        viewBox="0 -960 960 960" width="24px" fill="currentColor">
                        <path d="m330-444 201 201-51 51-288-288 288-288 51 51-201 201h438v72H330Z" />
                    </svg>Submit</button>
            </div>
        </div>
        <h4 class="heading-with-line">Button Groups</h4>
        <div>
            <div class="btn-group">
                <button class="btn">One</button>
                <button class="btn">Two</button>
                <button class="btn">Three</button>
            </div>
        </div>
    </section>
</template>
