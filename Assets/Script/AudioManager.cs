using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AudioManager : MonoBehaviour
{
    //SE�̃I�[�f�B�I�N���b�v
    public AudioClip[] SE_CLIP;
    //SE�̔ԍ�
    Dictionary<string, int> _seDictionary = new Dictionary<string, int>();
    //SE�̃I�[�f�B�I�\�[�X
    public AudioSource _seAudio;
    void Start()
    {
        
    }
    /// <summary>
    /// ���ʉ��𗬂�
    /// </summary>
    public void PlaySE(string SeName)
    {
        //_seAudio.Play(SE_CLIP[_seDictionary[SeName]]);
    }
}
