let d = new Date();
d = new Date(d.getFullYear(),d.getMonth()+5,06,00,10,00) - d;
const l = Array.from(document.querySelectorAll('span')).reverse();
const s = [1000,60,60,24];

const vset = (e,t,c) => {
	const m = c ? t % c : t;
	e.setAttribute('b', m < 10 ? '0' + m : m);
	e.classList.remove('ping');
	setTimeout(() => e.classList.add('ping'), 10);
	return m;
};
const calc = (t,i=0,b=0) => {
	if (!s[i]) return;
	t = opti(t,s[i]);
	if (vset(l[i],t,s[i+1])==s[i+1]-1 || b) calc(t,i+1,b);
}

const count = (b=0) => (d -= 1000) && calc(d,0,b);
const opti = (v,n) => (v - (v % n)) / n;

setTimeout(() => !count(1) && setInterval(count, 1000), d % 1000);