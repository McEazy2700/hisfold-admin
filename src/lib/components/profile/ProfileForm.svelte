<script>
	import { FormField, Label, FieldSet } from '$lib/components/forms';
</script>

<form class="mt-32 lg:px-20 p-3" action="">
	<FieldSet>
		<FormField type="text" placeholder="Your church's name">
			<svelte:fragment slot="label">Name</svelte:fragment>
		</FormField>
	</FieldSet>

	<FieldSet legend="Contact">
    <FormField type="email" placeholder="example@gmail.com">
      <svelte:fragment slot="label">
        <Label icon="clarity:email-solid" iconColor="text-violet-400">Email</Label>
      </svelte:fragment>
    </FormField>
    <FormField type="tel" placeholder="+2349001001010">
      <svelte:fragment slot="label">
        <Label icon="bi:phone-fill">Phone</Label>
      </svelte:fragment>
    </FormField>
	</FieldSet>

	<FieldSet legend="Socials">
		<FormField type="url" placeholder="https://youtube.com/@your_channel">
			<svelte:fragment slot="label">
				<Label icon="mingcute:youtube-fill" iconColor="text-red-600">YouTube</Label>
			</svelte:fragment>
		</FormField>
		<FormField type="url" placeholder="https://web.facebook.com/facebook_username">
			<svelte:fragment slot="label">
				<Label icon="akar-icons:facebook-fill" iconColor="text-blue-500">FaceBook</Label>
			</svelte:fragment>
		</FormField>
		<FormField type="url" placeholder="https://web.facebook.com/facebook_username">
			<svelte:fragment slot="label">
				<Label icon="fa6-brands:tiktok">TikTok</Label>
			</svelte:fragment>
		</FormField>
		<FormField type="url" placeholder="https://www.instagram.com/instagram_username">
			<svelte:fragment slot="label">
				<Label icon="skill-icons:instagram">Instagram</Label>
			</svelte:fragment>
		</FormField>
	</FieldSet>
</form>
