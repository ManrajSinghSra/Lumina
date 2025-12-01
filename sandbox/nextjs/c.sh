function start(){

    counter=0
    response=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:3000")
    
    while [[ ${response} -ne 200 ]]; do
     let counter++

     if (( counter % 20 == 0 )); then
      echo "Waiting for server"
      sleep 0.1
      fi

    response=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:3000") 

    done 

}

start & cd /home/user && npx next dev --turbo