<script lang="ts">
	import MsButton from "./components/MsButton/MsButton.svelte";
	import ProgressBarCircular from "./components/ProgressBarCircular/ProgressBarCircular.svelte";
	import More from "svelte-material-icons/Plus.svelte";
	import Home from "svelte-material-icons/Home.svelte";
	import Twitter from "svelte-material-icons/Twitter.svelte";
	import MsInput from "./components/MsInput/MsInput.svelte";
	import MsCard from "./components/MsCard/MsCard.svelte";
	import MsAlert from "./components/MsAlert/MsAlert.svelte";
	export let name: string;
	let showAlert = false;

	import MsInputSelect from "./components/MsInputSelect/MsInputSelect.svelte";
	import MsTooltip from "./components/MsTooltip/MsTooltip.svelte";
	import MsRow from "./components/MsRow/MsRow.svelte";
	import MsColRow from "./components/MsRow/MsColRow.svelte";
</script>

<main>
	<i class="mi-sharp sharp">sharp</i>
	<span class="material-icons">pie_chart</span>
	<span class="material-icons-outlined"> done </span>
	<h1>Hello {name}!</h1>
	<ProgressBarCircular />
	<MsButton
		iconAfter={true}
		color="warning"
		size="large"
		gradient={true}
		icon="home"
	/>
	<MsButton color="danger" icon="home" />
	<MsButton icon="home" iconAfter={true} color="success" label="echo !! XD" />
	<MsButton icon="home" iconAfter={true} color="warning" radius="rounded" />
	<MsButton
		icon="timeline"
		iconAfter={true}
		radius="medium"
		color="primary"
		size="tiny"
		label="seguir"
	/>
	<MsButton icon="favorite" color="dark" />
	<MsButton
		icon="favorite"
		iconAfter={true}
		color="white"
		size="tiny"
		radius="medium"
	/>
	<MsButton icon="favorite" size="tiny" radius="medium" />
	<MsInput color="primary" size="large" />
	<MsInput color="success" size="small" radius="medium" />
	<MsInput color="warning" type="password" radius="rounded" />
	<MsInput color="danger" radius="medium" />
	<MsInput color="dark" radius="square" />
	<MsInput
		color="white"
		label="Contraseña"
		type="password"
		placeholder="ingresar nombre"
	/>
	<MsInput type="number" placeholder="edad" radius="rounded" />
	<MsInput
		type="email"
		icon={true}
		placeholder="fecha"
		iconAfter={true}
		radius="square"
	/>

	<MsInput type="number" placeholder="edad" radius="rounded" />

	<MsButton
		color="success"
		label="ver alert"
		on:click={() => (showAlert = !showAlert)}
	/>
	<MsAlert color="warning" show={showAlert}>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fuga
		necessitatibus quos sed corporis, minus quae debitis magni doloremque
		tempore dolorum nulla repellendus. Facilis alias unde temporibus
		voluptate cum reiciendis! A quam perspiciatis ipsum saepe quidem quos
		soluta officia ratione amet similique vitae, eos molestiae ducimus
		libero consectetur fuga, quasi tenetur ea! Molestias, beatae temporibus
		placeat delectus soluta commodi neque.
	</MsAlert>
	<MsInputSelect icon="home" placeholder="Buscar..." />
	<MsCard color="white">
		<h1>dasdad hola mundo</h1>
		<MsButton icon="add" iconAfter={true} color="danger" />
		<MsButton icon="add" iconAfter={true} color="danger" />
		<MsButton icon="add" iconAfter={true} color="danger" gradient={true} />
		<MsInput color="dark" />
	</MsCard>
	<MsTooltip
		tooltipLabel="esto es tooltip sfsdfsfsdfsdsgsdg msfsdf dsfsdf sdfsdf sdfsdf dsfsdf s sdfsdf"
	>
		<MsButton
			slot="tooltip-content"
			label="este es el tooltip"
			color="warning"
		/>
		<MsButton label="ver tooltip" color="success" />
	</MsTooltip>
	<MsRow>
		<MsColRow sm={100} md={70} lg={30}>20%</MsColRow>
		<MsColRow sm={30}>50%</MsColRow>
		<MsColRow sm={70}>30%</MsColRow>
	</MsRow>
</main>

<style lang="scss">
	/*@import url(../node_modules/material-icons/iconfont/material-icons.woff2);
	@import url("../node_modules/material-icons/iconfont/material-icons-sharp.woff2");
	@import url("../node_modules/material-icons/iconfont/material-icons-outlined.woff2");
	@import url("../node_modules/material-icons/iconfont/material-icons-sharp.woff");
	@import url("../node_modules/material-icons/iconfont/material-icons.woff");
	@import url("../node_modules/material-icons/iconfont/material-icons-outlined.woff"); */
	$outer-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
		-6px -6px 10px -1px rgba(255, 255, 255, 0.7);
	$inner-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
		inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7),
		-0.5px -0.5px 0px rgba(255, 255, 255, 1),
		0.5px 0.5px 0px rgba(0, 0, 0, 0.15),
		0px 12px 10px 10px rgba(0, 0, 0, 0.05);

	:global(:root) {
		--outer-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5),
			5px 5px 10px rgba(170, 170, 204, 0.25),
			10px 10px 20px rgba(170, 170, 204, 0.5),
			-10px -10px 20px rgba(255, 255, 255, 0.8);
		--inner-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
			inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7),
			-0.5px -0.5px 0px rgba(255, 255, 255, 1);

		--border-radius: 7pt;
	}
	main {
		background: #f5f5fa;
	}
</style>
