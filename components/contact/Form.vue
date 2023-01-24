<template>
    <div>
        <div v-if="!formSubmitted" class="pa-2 px-lg-10">
            <validation-observer ref="observer">
                <validation-provider
                    name="Full Name"
                    rules="required"
                >
                    <v-text-field
                        v-model="form.name"
                        variant="filled"
                        hint="Enter your full name"
                        label="Full Name*"
                        :error-messages="errors"
                    ></v-text-field>
                </validation-provider>
                <validation-provider
                    name="Email"
                    rules="required|email"
                >
                    <v-text-field
                    v-model="form.email"
                    variant="filled"
                    hint="Enter your email"
                    label="Email*"
                    :error-messages="errors"
                    >
                    </v-text-field>
                </validation-provider>
                <validation-provider
                    name="Mobile Number"
                    rules="required|max:15"
                >
                    <v-text-field
                        v-model="form.contact"
                        variant="filled"
                        type="number"
                        hide-spin-buttons
                        hint="Enter your contact number"
                        label="Mobile Number*"
                        :error-messages="errors"
                    ></v-text-field>
                </validation-provider>
                <validation-provider name="Location" rules="required">
                    <v-text-field
                    v-model="form.location"
                    variant="filled"
                    hint="Enter Location"
                    label="Location*"
                    :error-messages="errors"
                    >
                    </v-text-field>
                </validation-provider>
                <validation-provider name="Category" rules="required">
                    <v-select
                    v-model="form.category"
                    :items="categoryOptions"
                    :error-messages="errors"
                    label="Are you a business or person?*"
                    variant="filled"
                    ></v-select>
                </validation-provider>
                <validation-provider name="Business Link(optional)">
                    <v-text-field
                    v-model="form.business_link"
                    hint="link to social media page or website"
                    variant="filled"
                    label="Business Link"
                    :error-messages="errors"
                    ></v-text-field>
                </validation-provider>
                <validation-provider name="Referrer">
                    <v-text-field
                    v-model="form.referrer"
                    hint="link to social media page or website"
                    label="Referrer"
                    variant="filled"
                    :error-messages="errors"
                    ></v-text-field>
                </validation-provider>
                <validation-provider name="Query" rules="required">
                    <v-textarea
                    v-model="form.query"
                    hint="Describe your query in summary"
                    label="Query*"
                    variant="filled"
                    :error-messages="errors"
                    ></v-textarea>
                </validation-provider>

                <v-btn block variant="outlined" color="accent" class="mb-2" @click="submit">
                    Submit
                </v-btn>
                <!-- Message from script -->
                <!-- <v-alert v-if="message" type="error">
                    {{ message }}
                </v-alert> -->
            </validation-observer>
        </div>
        <div v-else>
            <v-alert
            v-if="message"
            type="success"
            class="text-center"
            variant="outlined"
            >
            {{ message }}
            </v-alert>
        </div>
    </div>
</template>


<script setup>

const formSubmitted = false;
const form = {
    name: null,
    location: null,
    email: null,
    contact: null,
    category: null,
    business_link: null,
    referrer: null,
    query: null,
};
const categoryOptions=  {
    personal: 'Personal',
    business: 'Business'
};

const message = ref([]);

const errors = ref([]);
const submit = ()=>{
    try {
        
    } catch (e) {

       errors.value = e.errors; 
    }
}

</script>