class Negociacao {

	constructor(data, quantidade, valor) {

		this._data = data || new Date(data.getTime());
		this._quantidade = quantidade || 1;
		this._valor = valor || 0.0;

		Object.freeze(this);
	}

	get volume() {
		return this._quantidade * this._valor;
	}
	get data() {
		return new Date(this._data.getTime());
	}
	get quantidade() {
		return this._quantidade;
	}
	get valor() {
		return this._valor;
	}
}