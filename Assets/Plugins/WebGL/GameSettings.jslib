mergeInto(LibraryManager.library, 
{
	//�Q�[���J�n���R�[���o�b�N
	CallBackStart:function()
	{
		var callback_start =function() 
		{
		    
		}
		
		game_start(callback_start);
	},
	//�Q�[���I�����R�[���o�b�N
	CallBackEnd:function(game_score)
	{
		var callback_end = function()
		{
			
		}
		console.log(game_score);
		game_end({callback: callback_end, score: game_score});
	},
	//�Q�[�������[�h�L����������
	CallBackShowReward:function()
	{
		var reward_success_callback = function()
		{

		}
		show_reward_ad(reward_success_callback);
	},
	//�Q�[�������[�h�L�������s����
	CallBackFailShowReward:function()
	{
		var reward_fail_callback = function()
		{

		}
		show_reward_ad({reward_fail_callback:'fail_func'});
	},

});