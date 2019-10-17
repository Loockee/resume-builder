<template>
    <div class="">
        <h1>Data plateform: Injector System</h1>
        <a-row :gutter="16">
            <a-col class="gutter-row" :span="12">
                <a-card class="gutter-box" title="Inject record" :bordered="false" style="">
                    <div slot="extra">
                        <a-dropdown>
                            <a-menu slot="overlay" @click="importTemplate">
                                <a-menu-item v-for="t in allTemplates" v-bind:key="t.id"><a-icon type="user" />{{t.name}}</a-menu-item>
                            </a-menu>
                            <a-button style="margin-left: 8px"> Import template <a-icon type="down" /> </a-button>
                        </a-dropdown>
                    </div>
                    <a-form @submit="injectData">
                        <a-row>
                            <a-form-item label="Event Type" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                                <a-select defaultValue="partnerCreated" @change="handleEventTypeChanged">
                                    <a-select-option v-for="t in allEventTypes" v-bind:key="t.id">
                                        {{t.name}}
                                    </a-select-option>
                                </a-select>
                            </a-form-item>
                        </a-row>
                        <a-row>
                            <a-form-item label="Serialization type" :label-col="{ span: 5 }"
                                         :wrapper-col="{ span: 12 }">
                                <a-select defaultValue="text" @change="handleSerializationChanged">
                                    <a-select-option :value="t.id" v-for="t in allSerializationTypes" v-bind:key="t.id">
                                        {{t.name}}
                                    </a-select-option>
                                </a-select>
                            </a-form-item>
                        </a-row>
                        <a-row v-for="f in fields" v-bind:key="f.id">
                            <a-row :gutter="16">
                                <a-col class="gutter-row" :span="12">
                                    <a-form-item label="Key" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                                        <a-input placeholder="Enter the value of the key" v-model="f.key"/>
                                    </a-form-item>
                                </a-col>
                                <a-col class="gutter-row" :span="12">
                                    <a-form-item label="Value" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                                        <a-input placeholder="Enter the value associates to the key" v-model="f.value"/>
                                    </a-form-item>
                                </a-col>
                            </a-row>
                        </a-row>
                        <a-row>
                            <a-button-group>
                                <a-button type="primary" @click="addField">Add field</a-button>
                                <a-button type="default" @click="generateData">Generate data</a-button>
                            </a-button-group>
                        </a-row>
                    </a-form>
                </a-card>
            </a-col>
            <a-col class="gutter-row" :span="12">
                <a-row>
                    <a-card class="gutter-box" title="Data to inject" :bordered="false" style="">
                        <a-textarea style="height: 400px" disabled placeholder="Content generated"
                                    :value="json"></a-textarea>
                    </a-card>
                </a-row>
                <a-row>
                    <a-button type="danger" @click="injectData">Inject data</a-button>
                </a-row>
            </a-col>
        </a-row>
    </div>
</template>

<script>

  // eslint-disable-next-line no-unused-vars
  import { mapGetters, mapActions, mapMutations, mapState } from 'vuex';

  export default {
    name: 'DataInjecter',
    computed: mapGetters([
      'allTemplates', 'getTemplateById', 'allSerializationTypes',
      'serializationTypeById', 'allEventTypes', 'eventTypeById'
    ]),
    data() {
      return {
        selectedEventType: {},
        eventTypes: [],
        selectedSerializationType: {},
        serializationTypes: [],
        json: '',
        fields: [
          {
            id: 1,
            key: '',
            value: ''
          }
        ]
      }
    },
    methods: {
      ...mapActions(['fetchTemplates', 'fetchSerializationTypes', 'fetchEventTypes']),
      getTemplates() {
        return this.$store.getters.allTemplates.map(({name, id}) => ({id, name}));
      },
      handleEventTypeChanged(e) {
        const a = this.$store.getters.eventTypeById(e);
        console.log(a);
        if(a.length) {
          this.selectedEventType = a[0];
        }
      },
      handleSerializationChanged(e) {
        this.selectedEventType = this.$store.getters.serializationTypeById(e);
      },
      injectData() {
        console.log('injecting data to the system');
      },
      getEventType() {
        return this.selectedEventType.name;
      },
      getEventTypeByName(name) {
        return this.$store.getters.allEventTypes.filter(({n}) => (n === name))[0];
      },
      getSerializationType() {
        return this.selectedSerializationType.name;
      },
      generateData() {
        const content = {};
        this.fields.forEach(({key, value}) => {
          content[key] = value;
        });
        const data = {
          type: this.getEventType(),
          serializationType: this.getSerializationType(),
          content
        };
        this.json = JSON.stringify(data, null, 2);
      },
      importTemplate({key: templateId}) {
        const template = this.$store.getters.getTemplateById(templateId);
        this.selectedEventType = this.getEventTypeByName(template.name);
        const f = [];
        let i = 0;
        Object.keys(template.content).filter(k => k !== '').forEach(k => {
          // TODO: evaluate the type here
          const item = {
            id: i++,
            key: k,
            value: '',
          };
          f.push(item);
        });
        this.fields = f;
      },
      addField() {
        const id = this.fields.length + 1;
        this.fields.push({id, key: '', value: ''})
      },
    },
    mounted() {
      this.serializationTypes = this.$store.getters.allSerializationTypes;
      this.selectedSerializationType = this.serializationTypes[0];
      this.eventTypes = this.$store.getters.allEventTypes;
      this.selectedEventType = this.eventTypes[0];
    },
    created() {
      this.fetchTemplates();
      this.fetchSerializationTypes();
      this.fetchEventTypes();
    }
  }
</script>
<style>
    .data-injecter >>> .ant-row > div {
        background: transparent;
        border: 0;
    }

    .gutter-box {
        padding: 15px 0;
    }
</style>
