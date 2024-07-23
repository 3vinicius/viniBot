
# Provavelmete vamos pegar tudo que estivar na asta e converter, logo após remover os conteudos da pastas
#
urlDownload=$1
pitch=$2
path='C:\Users\vinicius.omena\Downloads'

#cd $path


if [[ -n "$urlDownload" ]]
then
      fileName=$(exec youtube-dl --get-filename --extract-audio --audio-format mp3 $urlDownload)
      echo "Passe value for variable $urlDownload"
fi


if [ -n "$pitch" ] && [ -n "$fileName" ]
then
        bpm=$(soundstretch $fileName.mp3 -bpm)
             exec soundstretch $fileName.mp3 $pitch$fileNameBPM=$bpm.mp3 -pitch=$pitch
      echo "outputFile = $pitch$fileNamebpm=$bpm.mp3"
else
echo "error"
fi



#exec youtube-dl --get-filename --extract-audio --audio-format mp3 "url"
#
#exec soundstretch my_original_file.wav output_file.wav -tempo=+15 -pitch=-3

#   -bpm=n Detect the Beats-Per-Minute (BPM) rate of the sound and adjust the  tempo  to  meet
#       'n'  BPMs.  When  this  switch  is  applied,  the  " -tempo" switch is ignored. If "=n" is
#       omitted, i.e. switch " -bpm" is used alone, then the BPM rate is estimated and  displayed,
#       but tempo not adjusted according to the BPM value.



#if [ $1 == "chrome" ]
#then
#        exec "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
#        exit 1
#elif [ $1 == "opera" ]
#then
#      exec "C:\Users\vinicius.omena\AppData\Local\Programs\Opera\opera.exe"
#else
#      echo "try again"
#      exec ls
#fi



#for fileName in $(ls *.mp3|egrep  -wo '[\a-z]+')
#do
#    echo $fileName
#done
