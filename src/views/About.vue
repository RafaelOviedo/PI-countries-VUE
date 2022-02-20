<template>
    <div>
        <div class="textBox">
        <h3>About</h3>
        <p>This page was created to practice different functionalities and new technologies.
            <br>
            <br>
            In this page were used multiple technologies as HTML, CSS, Vue and Vuex
            <br>
            <br>
            Here you can:
            <br>
            <br>
            - Search countries by name
            <br>
            - Filter countries by continent
            <br>
            - Order countries by letter and population 
            <br>
            - Check the country details
            
        </p>
        </div>
        <a
                href="https://github.com/RafaelOviedo"
                target="_blank"
                rel="noreferrer"
            >
                <img
                    class="githubIcon"
                    src="https://pngimg.com/uploads/github/github_PNG58.png"
                    alt="github icon"
                />
            </a>
            <a
                href="https://www.linkedin.com/in/rafael-oviedo/?locale=en_US"
                target="_blank"
                rel="noreferrer"
            >
                <img
                    class="linkedinIcon"
                    src="https://cdn.pixabay.com/photo/2017/08/22/11/56/linked-in-2668696_960_720.png"
                    alt="linkedin icon"
                />
            </a>
    </div>
</template>

<script>
export default {
    name: "About",
};
</script>

<style scoped>
.aboutTitle {
    position: absolute;
    top: 15%;
    left: 45%;
}

.textBox {
    position: absolute;
    top: 25%;
    left: 5%;
    width: 90%;
    height: 50vh;
}

.githubIcon {
    position: absolute;
    top: 80vh;
    left: 15%;
    width: 5%;
    height: 10%;
    background: white;
    border-radius: 50%;
}
.linkedinIcon {
    position: absolute;
    top: 80vh;
    left: 20%;
    width: 5%;
    height: 10%;
    background: white;
    border-radius: 50%;
}
</style>
