<template>
    <div class="container">
        <div class="main-card">

            <div class="header-container">
                <slot name="header"></slot>
            </div>

            <slot name="form"></slot>

            <div class="notes-container">
                <slot name="notes"></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh
}

.main-card {
    width: 800px;
    height: 600px;
    padding: 2em;
    flex-direction: column;
    gap: 1em;
    display: flex;
    justify-content: start;
    border: 3px solid var(--primary);
    border-radius: 10px;
}

@media screen and (max-width: 500px) {
    .main-card {
        padding: 1em;
        height: 100%;
    }
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.notes-container {
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 100%;
    overflow-y: auto;
}
</style>
