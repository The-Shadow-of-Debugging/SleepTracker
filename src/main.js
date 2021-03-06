import { createApp } from "vue";
import App from "@/App";
import components from "@/components/UI"

const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component)
})

app
    .use()
    .mount('#app')