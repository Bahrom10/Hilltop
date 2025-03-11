<template>
    <form @submit.prevent="save" class="form">
        <input type="text" name="name" placeholder="Name of card" class="form-input" v-model="name" required>
        <input type="file" name="file" class="form-input" ref="file" @change="handleFileUpload">
        <input v-if="!fileUrl" type="text" name="url" class="form-input" placeholder="URL of image" v-model="link">
        <textarea name="text" placeholder="Text of card" class="form-text" v-model="text" required>
        </textarea>
        <select name="type" class="form-select" v-model="type" required>
            <option value="" disabled>Select Type of Transport</option>
            <option value="ship">Ship</option>
            <option value="plane">Plane</option>
            <option value="boat">Boat</option>
        </select>
        <button type="submit" class="form-button">Submit</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';

const name = ref("");
const link = ref("");
const type = ref("");
const file = ref(null);
const text = ref("");
const fileUrl = ref("");

const handleFileUpload = () => {
    const fileInput = file.value;
    if (fileInput && fileInput.files.length > 0) {
        const selectedFile = fileInput.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            const base64String = reader.result.split(',')[1];
            const chunkSize = 1024 * 1024;
            const chunks = [];
            for (let i = 0; i < base64String.length; i += chunkSize) {
                chunks.push(base64String.slice(i, i + chunkSize));
            }

            fileUrl.value = chunks;
            console.log(chunks);            
        };

        reader.readAsDataURL(selectedFile);
    }
};

const save = () => {
    if (name.value && (link.value || fileUrl.value) && type.value) {
        const cards = fetch("https://tourism-express.onrender.com/cards")
        const card = {
            title: name.value,
            image: link.value || fileUrl.value,
            type: type.value,
            text: text.value
        };
        console.log(card);
        fetch("https://tourism-express.onrender.com/cards", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            // body: JSON.stringify(card)
        })

        fetch("https://tourism-express.onrender.com/cards", {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            // body: JSON.stringify(cards)
        })
        
        alert("Changes have been saved!");
        name.value = "";
        link.value = "";
        type.value = "";
        text.value = "";
        file.value = null;
        fileUrl.value = "";

    }
};
</script>

<style lang="scss" scoped>
.form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    max-width: 500px;
    margin: 40px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-input {
    width: 100%;
    max-width: 480px;
    height: 40px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.form-text {
    width: 100%;
    max-width: 480px;
    height: 100px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: vertical;
}

.form-select {
    width: 100%;
    max-width: 500px;
    height: 40px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.form-button {
    width: 100%;
    max-width: 480px;
    height: 40px;
    background-color: #4CAF50;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

.form-button:hover {
    background-color: #3e8e41;
}
</style>
