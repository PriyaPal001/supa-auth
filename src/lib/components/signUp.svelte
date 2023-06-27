<script>
    import supabase from '$lib/db.js';
    let email = '';
    let password = '';
    
    const usersignup = async () => {
        const { user, session, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        });
        console.log(user, session, error);
        email = '';
        password = '';
    };

</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<div class="card flex-shrink-0 w-full md:w-96 max-w-sm shadow-2xl bg-base-100">
			<div class="card-body">
				<form on:submit|preventDefault={usersignup} >
					<div class="form-control">
						<label class="label">
							<span class="label-text">Email</span>
						</label>
						<input type="text" placeholder="email" class="input input-bordered" bind:value={email} />
					</div>
					<div class="form-control">
						<label class="label">
							<span class="label-text">Password</span>
						</label>
						<input type="text" placeholder="password" class="input input-bordered" bind:value={password}/>
						<!-- <label class="label">
                <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
            </label> -->
					</div>
					<div class="form-control mt-6">
						<button class="btn btn-primary" type="submit">SignUp</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
