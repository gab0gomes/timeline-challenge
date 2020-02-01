import axios from 'axios';

export default () => axios.get('https://storage.googleapis.com/dito-questions/events.json');
