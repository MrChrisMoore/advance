
import Vue from 'vue';
import Component from 'vue-class-component';
import { DataTableHeader } from 'vuetify';
import {VDataTable} from 'vuetify/lib'
import {Resize} from 'vuetify/lib/directives'
@Component({
  components: {VDataTable
  },
  name: 'tmw-otd-ss',
  directives:{Resize}
})

export default class OTDSS extends Vue {
  headers: DataTableHeader[] = [];
  items = [];
  loading = true;
  windowSize = {
    x: 0,
    y: 0,
  }

  onResize() {
    this.windowSize = { x: window.innerWidth, y: window.innerHeight };
  }
  async mounted() {
    let user = JSON.parse(localStorage.getItem('user'));
    let response = await this.$tmwApi.postTmwOtdss({ body: { tmwCodes: user.tmwCodes } })
    if (response && response.length) {
      this.loading = false;

      Object.keys(response[0]).map((v) => {
        // console.log(`${v}:: Length :: ${v.length * 2}`);

        let header: DataTableHeader = {
          sortable: true,
          text: v,
          value: v,
          width: `${v.length * 2}`,
          groupable: true,
          filterable: true,
          divider: true

        }
        this.headers.push(header);
      });

      this.items = response;
    }
  }
}


